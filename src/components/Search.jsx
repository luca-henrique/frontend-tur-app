import SearchIcon from './SearchIcon.svg';

const Search = () => {
  return (
    <div className='flex relative my-4'>
      <input
        className='w-full rounded shadow h-8 outline-none px-2 pb-1 font-sans placeholder:text-xs'
        placeholder='Busque uma viagem'
        type='text'
      />
      <img
        className='absolute inset-y-1/4 right-2'
        src={SearchIcon}
        alt='Search Icon'
      />
    </div>
  );
};

export default Search;
