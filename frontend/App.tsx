import { LinearGradient } from 'expo-linear-gradient';
import './global.css';

export default function App() {
  return (
    <>
      <LinearGradient colors={['#4e4e5d', '#21303f']}
      style={{ flex: 1 }}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}>
        
      </LinearGradient>
    </>
  );
}
