import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Kebijakan Privasi - I have Tools',
  description: 'Kebijakan Privasi untuk I have Tools - Pelajari bagaimana kami melindungi privasi Anda saat menggunakan alat online gratis kami.',
};

export default function PrivacyPolicy() {
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
            <h1 className="text-xl font-bold text-gray-900">Kebijakan Privasi</h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <div className="prose prose-gray max-w-none">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Kebijakan Privasi</h1>
            <p className="text-gray-600 mb-8">Terakhir diperbarui: 27 Januari 2025</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Pendahuluan</h2>
              <p className="text-gray-700 mb-4">
                I have Tools ("kami", "kita", atau "milik kami") berkomitmen untuk melindungi privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda saat Anda menggunakan situs web I have Tools (ihavetools.com) dan layanan terkait ("Layanan").
              </p>
              <p className="text-gray-700">
                Dengan menggunakan Layanan kami, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Informasi yang Kami Kumpulkan</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">2.1 Informasi yang Dikumpulkan Secara Otomatis</h3>
              <p className="text-gray-700 mb-4">
                Ketika Anda mengunjungi situs web kami, kami secara otomatis mengumpulkan informasi tertentu tentang perangkat dan penggunaan Anda, termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Alamat IP</li>
                <li>Jenis browser dan versi</li>
                <li>Sistem operasi</li>
                <li>Halaman yang dikunjungi dan waktu kunjungan</li>
                <li>Sumber rujukan (referrer)</li>
                <li>Data penggunaan dan preferensi</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.2 Informasi yang Anda Berikan</h3>
              <p className="text-gray-700 mb-4">
                Kami dapat mengumpulkan informasi yang Anda berikan secara sukarela, seperti:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Data input untuk alat konversi (jumlah, mata uang, satuan, dll.)</li>
                <li>Informasi kontak jika Anda menghubungi kami</li>
                <li>Umpan balik atau komentar yang Anda berikan</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">2.3 Cookies dan Teknologi Pelacakan</h3>
              <p className="text-gray-700 mb-4">
                Kami menggunakan cookies dan teknologi pelacakan serupa untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Meningkatkan pengalaman pengguna</li>
                <li>Menganalisis penggunaan situs web</li>
                <li>Menyimpan preferensi pengguna</li>
                <li>Menyediakan iklan yang relevan</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Bagaimana Kami Menggunakan Informasi Anda</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">3.1 Tujuan Penggunaan</h3>
              <p className="text-gray-700 mb-4">
                Kami menggunakan informasi yang dikumpulkan untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Menyediakan dan memelihara Layanan</li>
                <li>Meningkatkan, mempersonalisasi, dan mengembangkan Layanan</li>
                <li>Memahami dan menganalisis cara Anda menggunakan Layanan</li>
                <li>Mengembangkan fitur, produk, dan layanan baru</li>
                <li>Berkomunikasi dengan Anda untuk layanan pelanggan dan dukungan</li>
                <li>Mengirimkan informasi teknis, pembaruan, dan pemberitahuan keamanan</li>
                <li>Mencegah penipuan dan aktivitas ilegal</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">3.2 Dasar Hukum Pemrosesan</h3>
              <p className="text-gray-700 mb-4">
                Kami memproses data pribadi Anda berdasarkan:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Persetujuan Anda</li>
                <li>Kepentingan sah kami dalam menyediakan dan meningkatkan Layanan</li>
                <li>Kepatuhan terhadap kewajiban hukum</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Berbagi Informasi dengan Pihak Ketiga</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">4.1 Layanan Pihak Ketiga</h3>
              <p className="text-gray-700 mb-4">
                Kami dapat berbagi informasi dengan penyedia layanan pihak ketiga yang membantu kami mengoperasikan Layanan, termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li><strong>Google Analytics</strong>: untuk analisis penggunaan situs web</li>
                <li><strong>Google AdSense</strong>: untuk menampilkan iklan yang relevan</li>
                <li><strong>Penyedia hosting</strong>: untuk menyimpan dan menyajikan konten situs web</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">4.2 Pembatasan Berbagi</h3>
              <p className="text-gray-700">
                Kami tidak menjual, memperdagangkan, atau mentransfer informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Untuk mematuhi hukum atau proses hukum</li>
                <li>Untuk melindungi hak, properti, atau keselamatan kami atau orang lain</li>
                <li>Dalam kasus merger, akuisisi, atau penjualan aset</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Keamanan Data</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">5.1 Langkah-langkah Keamanan</h3>
              <p className="text-gray-700 mb-4">
                Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi informasi Anda, termasuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Enkripsi data dalam transit menggunakan SSL/TLS</li>
                <li>Akses terbatas ke data pribadi</li>
                <li>Pemantauan keamanan reguler</li>
                <li>Pembaruan keamanan sistem secara berkala</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">5.2 Keterbatasan Keamanan</h3>
              <p className="text-gray-700">
                Meskipun kami berusaha melindungi informasi Anda, tidak ada metode transmisi melalui internet atau penyimpanan elektronik yang 100% aman. Kami tidak dapat menjamin keamanan absolut informasi Anda.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Retensi Data</h2>
              <p className="text-gray-700 mb-4">
                Kami menyimpan informasi pribadi Anda hanya selama diperlukan untuk tujuan yang dijelaskan dalam Kebijakan Privasi ini, kecuali periode retensi yang lebih lama diperlukan atau diizinkan oleh hukum.
              </p>
              <p className="text-gray-700 mb-4">
                Data input untuk alat konversi tidak disimpan secara permanen dan hanya diproses sementara untuk memberikan hasil konversi.
              </p>
              <p className="text-gray-700">
                Data analitik dapat disimpan hingga 26 bulan untuk membantu kami memahami pola penggunaan dan meningkatkan Layanan.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Hak-hak Anda</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">7.1 Hak Akses dan Kontrol</h3>
              <p className="text-gray-700 mb-4">
                Sesuai dengan hukum perlindungan data Indonesia, Anda memiliki hak untuk:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Mengakses informasi pribadi yang kami miliki tentang Anda</li>
                <li>Meminta koreksi informasi yang tidak akurat</li>
                <li>Meminta penghapusan informasi pribadi Anda</li>
                <li>Membatasi pemrosesan informasi Anda</li>
                <li>Meminta portabilitas data</li>
                <li>Menarik persetujuan kapan saja</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">7.2 Cara Menggunakan Hak Anda</h3>
              <p className="text-gray-700">
                Untuk menggunakan hak-hak ini, silakan hubungi kami melalui informasi kontak yang disediakan di bawah ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies dan Preferensi</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">8.1 Jenis Cookies</h3>
              <p className="text-gray-700 mb-4">Kami menggunakan berbagai jenis cookies:</p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li><strong>Cookies Esensial</strong>: diperlukan untuk fungsi dasar situs web</li>
                <li><strong>Cookies Analitik</strong>: membantu kami memahami penggunaan situs web</li>
                <li><strong>Cookies Iklan</strong>: digunakan untuk menampilkan iklan yang relevan</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">8.2 Mengelola Cookies</h3>
              <p className="text-gray-700">
                Anda dapat mengontrol dan mengelola cookies melalui pengaturan browser Anda. Namun, menonaktifkan cookies tertentu dapat mempengaruhi fungsionalitas situs web.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Layanan Pihak Ketiga</h2>
              
              <h3 className="text-xl font-medium text-gray-900 mb-3">9.1 Google Services</h3>
              <p className="text-gray-700 mb-4">
                Situs web kami menggunakan layanan Google, termasuk Google Analytics dan Google AdSense. Layanan ini memiliki kebijakan privasi mereka sendiri yang mengatur penggunaan data:
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                <li>Google Privacy Policy: https://policies.google.com/privacy</li>
                <li>Google Analytics: https://policies.google.com/technologies/partner-sites</li>
                <li>Google AdSense: https://policies.google.com/technologies/ads</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-900 mb-3">9.2 Tautan Eksternal</h3>
              <p className="text-gray-700">
                Layanan kami mungkin berisi tautan ke situs web pihak ketiga. Kami tidak bertanggung jawab atas praktik privasi situs web tersebut.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Perlindungan Anak</h2>
              <p className="text-gray-700 mb-4">
                Layanan kami tidak ditujukan untuk anak-anak di bawah usia 13 tahun. Kami tidak secara sengaja mengumpulkan informasi pribadi dari anak-anak di bawah 13 tahun. Jika Anda adalah orang tua atau wali dan mengetahui bahwa anak Anda telah memberikan informasi pribadi kepada kami, silakan hubungi kami.
              </p>
              <p className="text-gray-700">
                Jika kami menemukan bahwa anak di bawah 13 tahun telah memberikan kami informasi pribadi, kami akan menghapus informasi tersebut dari server kami segera.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Transfer Data Internasional</h2>
              <p className="text-gray-700 mb-4">
                Informasi Anda mungkin ditransfer ke dan dipelihara di komputer yang berlokasi di luar negara bagian, provinsi, negara, atau yurisdiksi pemerintahan lainnya di mana undang-undang perlindungan data mungkin berbeda dari yurisdiksi Anda.
              </p>
              <p className="text-gray-700">
                Kami akan mengambil semua langkah yang wajar untuk memastikan bahwa data Anda diperlakukan dengan aman dan sesuai dengan Kebijakan Privasi ini.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Perubahan Kebijakan Privasi</h2>
              <p className="text-gray-700 mb-4">
                Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberitahu Anda tentang perubahan dengan memposting Kebijakan Privasi baru di halaman ini dan memperbarui tanggal "Terakhir diperbarui".
              </p>
              <p className="text-gray-700">
                Kami menyarankan Anda untuk meninjau Kebijakan Privasi ini secara berkala untuk mengetahui perubahan apa pun.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Informasi Kontak</h2>
              <p className="text-gray-700 mb-4">
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau ingin menggunakan hak-hak Anda, silakan hubungi kami:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-2"><strong>Email:</strong> privacy@ihavetools.com</p>
                <p className="text-gray-700 mb-2"><strong>Alamat:</strong> Jakarta, Indonesia</p>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-sm text-gray-500 text-center">
                Kebijakan Privasi ini terakhir diperbarui pada 27 Januari 2025
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
