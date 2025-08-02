-- Supabase Database Schema for Spanish Sarai Online
-- Run this SQL in your Supabase SQL editor to create the required tables

-- Create user_profiles table
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  name VARCHAR(255) NOT NULL,
  level VARCHAR(100) NOT NULL,
  goals TEXT,
  timezone VARCHAR(50),
  phone VARCHAR(20),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create bookings table
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES user_profiles(id) ON DELETE CASCADE,
  service_type VARCHAR(100) NOT NULL,
  service_name VARCHAR(255) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  duration VARCHAR(50) NOT NULL,
  booking_date DATE NOT NULL,
  booking_time VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  payment_intent_id VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX idx_user_profiles_email ON user_profiles(email);
CREATE INDEX idx_bookings_user_id ON bookings(user_id);
CREATE INDEX idx_bookings_status ON bookings(status);
CREATE INDEX idx_bookings_date ON bookings(booking_date);

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_user_profiles_updated_at BEFORE UPDATE ON user_profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_bookings_updated_at BEFORE UPDATE ON bookings
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS) for security
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create policies for user_profiles
-- Allow users to read their own profile
CREATE POLICY "Users can read their own profile" ON user_profiles
  FOR SELECT USING (true); -- For now, allow all reads (can be restricted later)

-- Allow users to insert their own profile
CREATE POLICY "Users can insert their own profile" ON user_profiles
  FOR INSERT WITH CHECK (true); -- For now, allow all inserts

-- Allow users to update their own profile
CREATE POLICY "Users can update their own profile" ON user_profiles
  FOR UPDATE USING (true); -- For now, allow all updates

-- Create policies for bookings
-- Allow users to read their own bookings
CREATE POLICY "Users can read their own bookings" ON bookings
  FOR SELECT USING (true); -- For now, allow all reads

-- Allow users to insert their own bookings
CREATE POLICY "Users can insert their own bookings" ON bookings
  FOR INSERT WITH CHECK (true); -- For now, allow all inserts

-- Allow users to update their own bookings
CREATE POLICY "Users can update their own bookings" ON bookings
  FOR UPDATE USING (true); -- For now, allow all updates

-- Sample data for testing (optional)
-- INSERT INTO user_profiles (email, name, level, goals, timezone) VALUES
-- ('test@example.com', 'Test User', 'beginner', 'Learn basic Spanish conversation', 'America/New_York');

-- View to get booking details with user info (for admin use)
CREATE VIEW booking_details AS
SELECT 
  b.id,
  b.service_type,
  b.service_name,
  b.price,
  b.duration,
  b.booking_date,
  b.booking_time,
  b.status,
  b.payment_intent_id,
  b.created_at as booking_created_at,
  u.name as user_name,
  u.email as user_email,
  u.level as user_level,
  u.goals as user_goals,
  u.timezone as user_timezone
FROM bookings b
JOIN user_profiles u ON b.user_id = u.id
ORDER BY b.created_at DESC; 