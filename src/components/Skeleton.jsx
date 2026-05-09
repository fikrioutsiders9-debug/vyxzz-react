import { motion } from 'framer-motion';

export default function Skeleton() {
  return (
    /* minHeight: 100vh bikin konten narik ke bawah, footer jadi gak naik */
    <div style={{ 
      padding: '80px 20px', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center',
      minHeight: '100vh', 
      backgroundColor: '#2c2c2c' // Warna --bg-dark-main 
    }}>
      {/* Judul Skeleton */}
      <motion.div 
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        style={{ width: '200px', height: '40px', marginBottom: '40px', background: '#3d3d3d', borderRadius: '8px' }}
      />

      {/* Grid yang Responsive */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', // Ukuran kotak pas di mobile
        gap: '24px',
        width: '100%',
        maxWidth: '1100px'
      }}>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            style={{ 
              height: '350px', //tinggiin dikit biar mantap
              width: '100%', 
              background: '#1a1a1a', 
              borderRadius: '15px', 
              border: '1px solid #3d3d3d' 
            }}
          />
        ))}
      </div>
    </div>
  );
}