import logo from '../assets/no-projects.png';
export  default function NoProject({onStartAddProject}) {
    return (
        <div className="mt-24 text-center  w-2/3 ">
            <img src={logo} className='w-16 h-16 object-contain mx-auto'/>
            <h2 className='text-xl font-bold text-stone-500 mt-4 my-4' >No project</h2>
            <p className='text-stone-400 mb-4'>Select project or create a new one</p>
            <p className='mt-8'>
            <button onClick={onStartAddProject} className='px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100'>Create Project</button>
            </p>
        </div>
    );
};