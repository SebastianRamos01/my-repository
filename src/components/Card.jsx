import { Link } from "react-router-dom";

export default function Card({ title, index, img, bg }) {
  return (
    <div className='flex justify-center rounded relative max-w-[385px]' style={{backgroundColor: bg}}>
    
      <Link to={`/work/${title}`} className="flex">
        <div className="w-1/2 py-3 z-[5]">
          <img src={`/images/${img}`} alt={title} />
        </div>
        <div className="absolute top-0 right-0">
          <p className="font-medium opacity-50 leading-none text-9xl mx-1">#{index}</p>
        </div>
      </Link>
    </div>
  );
}
