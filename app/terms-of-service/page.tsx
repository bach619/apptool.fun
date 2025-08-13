import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Syarat dan Ketentuan Layanan - I have Tools',
  description: 'Syarat dan Ketentuan Layanan untuk I have Tools - Alat konversi online gratis.',
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link 
              href="/" 
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Alat</span>
            </Link>
            <h1 className="text-xl font-bold text-gray-900">Syarat dan Ketentuan Layanan</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Syarat dan Ketentuan Layanan</h1>
            <p className="text-gray-600 mb-8">Terakhir diperbarui: 27 Januari 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
              <p className="text-gray-700 mb-4">
                Dengan mengakses dan menggunakan situs web I have Tools ("Layanan"), Anda menyetujui untuk terikat oleh Syarat dan Ketentuan Layanan ini ("Syarat"). Jika Anda tidak menyetujui semua syarat dan ketentuan ini, maka Anda tidak diperkenankan menggunakan Layanan ini.
              </p>
              <p className="text-gray-700">
                Syarat dan Ketentuan ini berlaku untuk semua pengunjung, pengguna, dan pihak lain yang mengakses atau menggunakan Layanan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Deskripsi Layanan</h2>
              <p className="text-gray-700 mb-4">
                I have Tools menyediakan berbagai alat konversi online gratis termasuk namun tidak terbatas pada:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Konverter mata uang</li>
                <li>Konverter satuan</li>
                <li>Konverter zona waktu</li>
                <li>Kalkulator sederhana</li>
                <li>Roda nama acak</li>
              </ul>
              <p className="text-gray-700">
                Layanan disediakan "sebagaimana adanya" dan dapat diubah atau dihentikan sewaktu-waktu tanpa pemberitahuan sebelumnya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Tanggung Jawab Pengguna</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Penggunaan yang Sah</h3>
              <p className="text-gray-700 mb-4">
                Anda setuju untuk menggunakan Layanan hanya untuk tujuan yang sah dan sesuai dengan:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Syarat dan Ketentuan ini</li>
                <li>Hukum dan peraturan yang berlaku di Indonesia</li>
                <li>Norma-norma yang berlaku secara umum</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Informasi Akurat</h3>
              <p className="text-gray-700 mb-4">
                Anda bertanggung jawab untuk memastikan bahwa informasi yang Anda masukkan ke dalam alat-alat konversi adalah akurat dan Anda memahami bahwa hasil konversi bergantung pada keakuratan data input.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.3 Keamanan</h3>
              <p className="text-gray-700">
                Anda bertanggung jawab untuk menjaga keamanan perangkat dan koneksi internet Anda saat menggunakan Layanan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Aktivitas yang Dilarang</h2>
              <p className="text-gray-700 mb-4">Anda dilarang untuk:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Menggunakan Layanan untuk tujuan ilegal atau tidak sah</li>
                <li>Mengganggu atau merusak integritas atau kinerja Layanan</li>
                <li>Mencoba mengakses sistem atau jaringan yang tidak berwenang</li>
                <li>Menggunakan robot, spider, atau alat otomatis lainnya untuk mengakses Layanan</li>
                <li>Menyebarkan virus, malware, atau kode berbahaya lainnya</li>
                <li>Melanggar hak kekayaan intelektual pihak ketiga</li>
                <li>Menggunakan Layanan untuk spam atau aktivitas komersial yang tidak diinginkan</li>
                <li>Menyalahgunakan atau memanipulasi fitur-fitur yang tersedia</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Hak Kekayaan Intelektual</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Kepemilikan Konten</h3>
              <p className="text-gray-700 mb-4">
                Semua konten, fitur, dan fungsionalitas Layanan, termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, klip audio, unduhan digital, kompilasi data, dan perangkat lunak, adalah milik eksklusif I have Tools atau pemberi lisensinya dan dilindungi oleh hukum hak cipta Indonesia dan internasional.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Lisensi Terbatas</h3>
              <p className="text-gray-700 mb-4">
                Kami memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dialihkan, dan dapat dicabut untuk menggunakan Layanan sesuai dengan Syarat dan Ketentuan ini.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.3 Pembatasan</h3>
              <p className="text-gray-700">
                Anda tidak diperkenankan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Mereproduksi, mendistribusikan, atau membuat karya turunan dari Layanan</li>
                <li>Melakukan reverse engineering atau mencoba mengekstrak kode sumber</li>
                <li>Menggunakan Layanan untuk tujuan komersial tanpa izin tertulis</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Penyangkalan dan Pembatasan Tanggung Jawab</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">6.1 Penyangkalan Jaminan</h3>
              <p className="text-gray-700 mb-4">
                Layanan disediakan "sebagaimana adanya" dan "sebagaimana tersedia" tanpa jaminan dalam bentuk apa pun, baik tersurat maupun tersirat, termasuk namun tidak terbatas pada jaminan kelayakan untuk diperdagangkan, kesesuaian untuk tujuan tertentu, atau tidak melanggar hak pihak ketiga.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.2 Penyangkalan Akurasi</h3>
              <p className="text-gray-700 mb-4">
                Meskipun kami berusaha memberikan hasil konversi yang akurat, kami tidak menjamin keakuratan, kelengkapan, atau keandalan hasil konversi. Pengguna bertanggung jawab untuk memverifikasi hasil sebelum menggunakannya untuk tujuan penting.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">6.3 Pembatasan Tanggung Jawab</h3>
              <p className="text-gray-700">
                Dalam keadaan apa pun, I have Tools, direktur, karyawan, mitra, agen, pemasok, atau afiliasinya tidak akan bertanggung jawab atas kerusakan tidak langsung, insidental, khusus, konsekuensial, atau hukuman, termasuk namun tidak terbatas pada kehilangan keuntungan, data, penggunaan, goodwill, atau kerugian tidak berwujud lainnya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Penghentian Layanan</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Penghentian oleh Pengguna</h3>
              <p className="text-gray-700 mb-4">
                Anda dapat menghentikan penggunaan Layanan kapan saja dengan berhenti mengakses situs web.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Penghentian oleh Kami</h3>
              <p className="text-gray-700 mb-4">
                Kami berhak untuk menghentikan atau menangguhkan akses Anda ke Layanan segera, tanpa pemberitahuan sebelumnya atau tanggung jawab, karena alasan apa pun, termasuk namun tidak terbatas pada pelanggaran Syarat dan Ketentuan ini.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.3 Akibat Penghentian</h3>
              <p className="text-gray-700">
                Setelah penghentian, hak Anda untuk menggunakan Layanan akan berakhir segera.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Hukum yang Berlaku dan Penyelesaian Sengketa</h2>
              <p className="text-gray-700 mb-4">
                Syarat dan Ketentuan ini diatur dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa yang timbul dari atau berkaitan dengan Syarat dan Ketentuan ini akan diselesaikan melalui pengadilan yang berwenang di Jakarta, Indonesia.
              </p>
              <p className="text-gray-700">
                Jika ada ketentuan dalam Syarat dan Ketentuan ini yang dianggap tidak dapat dilaksanakan atau tidak sah, ketentuan tersebut akan diubah dan ditafsirkan untuk mencapai tujuan ketentuan tersebut semaksimal mungkin di bawah hukum yang berlaku.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Perubahan Syarat dan Ketentuan</h2>
              <p className="text-gray-700 mb-4">
                Kami berhak, atas kebijakan kami sendiri, untuk mengubah atau mengganti Syarat dan Ketentuan ini kapan saja. Jika revisi bersifat material, kami akan berusaha memberikan pemberitahuan setidaknya 30 hari sebelum syarat baru berlaku.
              </p>
              <p className="text-gray-700">
                Dengan terus mengakses atau menggunakan Layanan setelah revisi tersebut berlaku, Anda setuju untuk terikat oleh syarat yang telah direvisi.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Ketentuan Umum</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">10.1 Keterpisahan</h3>
              <p className="text-gray-700 mb-4">
                Jika ada ketentuan dalam Syarat dan Ketentuan ini yang dianggap tidak dapat dilaksanakan atau tidak sah, ketentuan tersebut akan diubah dan ditafsirkan untuk mencapai tujuan ketentuan tersebut semaksimal mungkin di bawah hukum yang berlaku.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.2 Keseluruhan Perjanjian</h3>
              <p className="text-gray-700 mb-4">
                Syarat dan Ketentuan ini merupakan keseluruhan perjanjian antara kami mengenai Layanan dan menggantikan semua komunikasi, proposal, atau representasi sebelumnya atau kontemporer, baik lisan maupun tertulis.
              </p>

              <h3 className="text-xl font-medium text-gray-900 mb-3">10.3 Pembebasan</h3>
              <p className="text-gray-700">
                Kegagalan kami untuk menegakkan hak atau ketentuan dalam Syarat dan Ketentuan ini tidak akan dianggap sebagai pembebasan dari hak atau ketentuan tersebut.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Informasi Kontak</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami di:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@ihavetools.com</p>
                <p className="text-gray-700"><strong>Alamat:</strong> Jakarta, Indonesia</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                Dokumen ini terakhir diperbarui pada 27 Januari 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
