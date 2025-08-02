import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { userProfileService, bookingService, UserProfile } from '@/lib/supabase';
import { useLanguage } from '@/contexts/LanguageContext';

const SupabaseTest: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string>('');
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [testProfile, setTestProfile] = useState({
    name: 'Test User',
    email: 'test@example.com',
    level: 'beginner',
    goals: 'Learn basic Spanish conversation',
    timezone: 'America/New_York'
  });

  const { t } = useLanguage();

  const handleCreateTestProfile = async () => {
    setIsLoading(true);
    setResult('');

    try {
      const profile = await userProfileService.createOrUpdateProfile(testProfile);
      setResult(`✅ Profile created successfully!\nID: ${profile.id}\nEmail: ${profile.email}\nName: ${profile.name}`);
      
      // Also create a test booking
      await bookingService.createBooking({
        user_id: profile.id,
        service_type: 'trial',
        service_name: 'Trial Spanish Class',
        price: 10.50,
        duration: '25 minutes',
        booking_date: new Date().toISOString().split('T')[0],
        booking_time: '15:00',
        status: 'confirmed'
      });

      setResult(prev => prev + '\n✅ Test booking created successfully!');
    } catch (error) {
      setResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGetAllProfiles = async () => {
    setIsLoading(true);
    setResult('');

    try {
      const allProfiles = await userProfileService.getAllProfiles();
      setProfiles(allProfiles);
      setResult(`✅ Retrieved ${allProfiles.length} profiles from database`);
    } catch (error) {
      setResult(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTestConnection = async () => {
    setIsLoading(true);
    setResult('');

    try {
      // Test basic connection by trying to get profiles
      await userProfileService.getAllProfiles();
      setResult('✅ Supabase connection successful!');
    } catch (error) {
      setResult(`❌ Connection failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Supabase Integration Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-4">
            <Button onClick={handleTestConnection} disabled={isLoading}>
              Test Connection
            </Button>
            <Button onClick={handleCreateTestProfile} disabled={isLoading}>
              Create Test Profile
            </Button>
            <Button onClick={handleGetAllProfiles} disabled={isLoading}>
              Get All Profiles
            </Button>
          </div>

          {result && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap text-sm">{result}</pre>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Create Custom Test Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={testProfile.name}
                onChange={(e) => setTestProfile({...testProfile, name: e.target.value})}
              />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={testProfile.email}
                onChange={(e) => setTestProfile({...testProfile, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="level">Level</Label>
              <Select value={testProfile.level} onValueChange={(value) => setTestProfile({...testProfile, level: value})}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="timezone">Timezone</Label>
              <Input
                id="timezone"
                value={testProfile.timezone}
                onChange={(e) => setTestProfile({...testProfile, timezone: e.target.value})}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="goals">Goals</Label>
            <Textarea
              id="goals"
              value={testProfile.goals}
              onChange={(e) => setTestProfile({...testProfile, goals: e.target.value})}
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {profiles.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>User Profiles in Database</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {profiles.map((profile) => (
                <div key={profile.id} className="border p-4 rounded-lg">
                  <h3 className="font-semibold">{profile.name}</h3>
                  <p className="text-sm text-gray-600">Email: {profile.email}</p>
                  <p className="text-sm text-gray-600">Level: {profile.level}</p>
                  <p className="text-sm text-gray-600">Goals: {profile.goals}</p>
                  <p className="text-sm text-gray-600">Created: {new Date(profile.created_at).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SupabaseTest; 