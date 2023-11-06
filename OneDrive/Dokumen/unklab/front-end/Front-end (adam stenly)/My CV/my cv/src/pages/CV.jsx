import Will from "../img/william.png";
import Tiang from "../img/tiang.png";
const MyCv = () => {
  return (
    <div className="flex shadow-sm shadow-black">
      <div className="flex flex-col items-center bg-[#323B4C] text-white w-36 h-[550px]">
        <img src={Will} className="rounded-full w-30 h-24 mt-4" />
        <div className="ml-6 mt-4">
          <p className="text-[10px] font-bold">Contact</p>
          <hr className="w-[100px]" />
          <p className="text-[6px] mt-2">Phone</p>
          <p className="text-[6px]">081215217271</p>
          <p className="text-[6px] mt-2">Email</p>
          <p className="text-[6px]">pedagang100@gmail.com</p>
          <p className="text-[6px] mt-2">Address</p>
          <p className="text-[6px]">JL.Konsolidasi No.117</p>
        </div>
        <div className="ml-6 mt-3">
          <p className="text-[10px] font-bold">Education</p>
          <hr className="w-[100px]" />
          <p className="text-[6px] mt-2">2018-2021</p>
          <p className="text-[6px]">Sma Negeri 1 Tobelo</p>
          <p className="mt-3 text-[6px] font-">2021-Present</p>
          <p className="text-[7px] font-bold">Informatics Major</p>
          <p className="text-[6px]">Universitas Klabat</p>
        </div>
        <div className="ml-6 mt-3">
          <p className="text-[10px] font-bold">Skills</p>
          <hr className="w-[100px]" />
          <ul className="text-[6px] mt-2">
            <li className="mt-2">- Web Development Front-End</li>
            <li className="mt-2">- Team Work</li>
            <li className="mt-2">- Design Graphic</li>
            <li className="mt-2">- Video Edition</li>
            <li className="mt-2">- Lighting Designer</li>
            <li className="mt-2">- Process Flows</li>
          </ul>
        </div>
        <div className="ml-6 mt-3">
          <p className="text-[10px] font-bold">Language</p>
          <hr className="w-[100px]" />
          <p className="text-[6px] mt-2">English</p>
          <p className="text-[6px] mt-2">Indonesia</p>
        </div>
      </div>
      <div className="bg-white w-64 h-[550px]">
        <div className="mt-6 ml-4">
          <p className="text-xl font-bold font-serif">Goeyana William</p>
          <p className="text-[10px] -mt-1">Mahasiswa Informatika</p>
        </div>
        <div className="mt-12 ml-4">
          <p className="font-bold">Experience</p>
          <hr className="w-[240px] bg-black" />
        </div>
        <img src={Tiang} className="absolute h-[340px] ml-2 mt-2" />
        <div className="ml-7 mt-4 leading-3">
          <p className="text-[8px] font-semibold">2022-Sekarang</p>
          <p className="text-[8px]">Lumen development Team | Unklab</p>
          <p className="text-[10px] font-bold">Magang Front-End Developer</p>
          <p className="text-[6px] ml-2">
            -Terlibat aktif dalam pembuatan proyek website/web app bersama tim{" "}
            <br />
            -Membuat tampilan web application untuk dining di Unklab Dine <br />
            -Membuat tampilan web application untuk ujian Fakultas Kependidikan
            Unklab,FKIP Exam System.
          </p>
        </div>
        <div className="ml-7 mt-9 leading-3">
          <p className="text-[8px] font-semibold">2022-Sekarang</p>
          <p className="text-[8px]">Google Developer Student Club | Unklab</p>
          <p className="text-[10px] font-bold">
            Core Team Artificial Intelligence
          </p>
          <p className="text-[6px] ml-2">
            -Mengajarkan kepada anggota tentang Artificial Intelligence <br />
            -Menyusun pembahasan yang akan diajarkan <br />
            -Terlibat dalam rapat mingguan dan memberikan pendapat
          </p>
        </div>
        <div className="ml-7 mt-11 leading-3">
          <p className="text-[8px] font-semibold">2022</p>
          <p className="text-[8px]">Harvest Pro | Manado</p>
          <p className="text-[10px] font-bold">Lighting Crew</p>
          <p className="text-[6px] ml-2">
            -Membantu mengatur peralatan <br />
            -Mengatur lampu panggung,lampu efek dan lampu pencahayaan <br />
            -Mengoperasikan lampu sorot selama acara <br />
            -Mengelola jalur kabel pada acara
          </p>
        </div>
      </div>
    </div>
  );
};
export default MyCv;
