import { AlertTriangle } from 'lucide-react';
import SectorCard from '../SectorCard';

export default function Kebencanaan() {
  return (
    <SectorCard
      title="Kebencanaan"
      description="Titik posko bencana, kejadian longsor dan banjir, serta informasi kontak darurat BPBA."
      search="bencana"
      icon={AlertTriangle}
    />
  );
}
