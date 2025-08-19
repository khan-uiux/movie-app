import { MdAccessTime } from "react-icons/md";


function Card({movie}) {
  return (
    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
        <div className="card-body">
            <div className="img">
                <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="product" />
            </div>
            <div className="card-content">
                <p className="moviename text-[13px] font-[400]">{movie.original_title}</p>
                <p className="description text-[12px] font-[400] mt-1 text-[#ff7800]">{movie.overview.slice(0, 25)}...</p>
                <p className="mt-1 text-[12px] flex items-center gap-2"><span className="text-[18px] text-[#0CB6E1]"><MdAccessTime /></span> {movie.vote_count}</p>
            </div>
        </div>
    </a>
  )
}

export default Card