import { HeartPulse } from 'lucide-react';
import SectorCard from '../SectorCard';

export default function Kesehatan() {
  return (
    <SectorCard
      title="Kesehatan"
      description="Data tematik kesehatan, termasuk sebaran fasilitas dan informasi layanan kesehatan."
      search="kesehatan"
      icon={HeartPulse}
    />
  );
}
