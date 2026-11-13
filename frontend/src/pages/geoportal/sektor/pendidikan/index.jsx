import { Fish } from 'lucide-react';
import SectorCard from '../SectorCard';

export default function Perikanan() {
  return (
    <SectorCard
      title="Perikanan"
      description="Lokasi pelabuhan perikanan (TPI/PPS Lampulo), volume tangkapan ikan laut, dan data budidaya tambak."
      search="perikanan"
      icon={Fish}
    />
  );
}
