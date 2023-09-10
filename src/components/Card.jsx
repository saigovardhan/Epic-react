export const Card = ({children})=>{
    return (
      <div className="transition hover:bg-purple-700 flex hover: justify-between gap-x-6 py-5 px-3 m-2  rounded-lg  bg-purple-500 text-gray-50 ">
        {children}
      </div>
    );
}