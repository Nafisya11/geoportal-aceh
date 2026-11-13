import { BookOpen } from 'lucide-react';
import SectorCard from '../SectorCard';

export default function Pendidikan() {
  return (
    <SectorCard
      title="Pendidikan"
      description="Data tematik pendidikan, termasuk sebaran fasilitas dan informasi satuan pendidikan."
      search="pendidikan"
      icon={BookOpen}
    />
  );
}
