
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ChatSidebar from '@/components/chat/ChatSidebar';
import ChatWindow from '@/components/chat/ChatWindow';
import { ScrollAnimation } from '@/components/ScrollAnimation';

interface Student {
  id: string;
  name: string;
  avatar?: string;
  lastMessage?: string;
  lastMessageTime?: string;
  unreadCount?: number;
  online?: boolean;
}

interface Message {
  id: string;
  senderId: string;
  senderName: string;
  content: string;
  timestamp: string;
  isFromTeacher: boolean;
}

const Chat = () => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  
  // Datos de ejemplo - en una aplicación real estos vendrían de una base de datos
  const [students] = useState<Student[]>([
    {
      id: '1',
      name: 'María González',
      lastMessage: 'Tengo una pregunta sobre la tarea de verbos',
      lastMessageTime: '10:30 AM',
      unreadCount: 2,
      online: true
    },
    {
      id: '2',
      name: 'Carlos Rodríguez',
      lastMessage: 'Gracias por la explicación de ayer',
      lastMessageTime: '9:15 AM',
      unreadCount: 0,
      online: false
    },
    {
      id: '3',
      name: 'Ana Martínez',
      lastMessage: '¿Podemos repasar los tiempos verbales?',
      lastMessageTime: 'Ayer',
      unreadCount: 1,
      online: true
    }
  ]);

  const [messages] = useState<Message[]>([
    {
      id: '1',
      senderId: '1',
      senderName: 'María González',
      content: 'Hola Sarai, tengo una duda sobre los verbos irregulares',
      timestamp: '10:25 AM',
      isFromTeacher: false
    },
    {
      id: '2',
      senderId: 'teacher',
      senderName: 'Sarai',
      content: 'Hola María! Claro, dime cuál es tu duda específica',
      timestamp: '10:27 AM',
      isFromTeacher: true
    },
    {
      id: '3',
      senderId: '1',
      senderName: 'María González',
      content: 'No entiendo bien cuándo usar "ser" y cuándo "estar"',
      timestamp: '10:30 AM',
      isFromTeacher: false
    }
  ]);

  const currentMessages = selectedStudent 
    ? messages.filter(msg => msg.senderId === selectedStudent.id || msg.isFromTeacher)
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />
      
      <main className="pt-20">
        <ScrollAnimation>
          <div className="sarai-container py-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-sarai-primary mb-4">
                Chat con Estudiantes
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Mantente conectada con tus estudiantes, resuelve dudas y brinda apoyo personalizado
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden" style={{ height: '600px' }}>
              <div className="flex h-full">
                <ChatSidebar 
                  students={students}
                  selectedStudent={selectedStudent}
                  onSelectStudent={setSelectedStudent}
                />
                <ChatWindow 
                  selectedStudent={selectedStudent}
                  messages={currentMessages}
                />
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </main>

      <Footer />
    </div>
  );
};

export default Chat;
