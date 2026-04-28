import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ServiceDetail() {
  const { id } = useParams(); // 1. Tangkap ID dari URL
  const [item, setItem] = useState(null);

  useEffect(() => {
    // 2. Tetap pake FETCH kayak cara lama lo
    fetch('/data/services.json')
      .then(res => res.json())
      .then(data => {
        // 3. Cari data yang ID-nya sama dengan ID dari URL
        const found = data.find(s => s.id === parseInt(id));
        setItem(found);
      });
  }, [id]); // Re-run kalau ID berubah

  if (!item) return <p>Loading...</p>;

  return (
    <div className="container" style={{ padding: '120px 20px' }}>
      <h1>{item.nama}</h1>
      <p>{item.deskripsi}</p>
      {/* Di sini lo bisa tambah info baru yang ada di JSON lo nanti */}
      <div className="detail-box">
        <h3>Kenapa pilih jasa ini?</h3>
        <p>Penjelasan mendalam tentang {item.nama}...</p>
      </div>
    </div>
  );
}