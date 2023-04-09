function Loading() {
  return (
    <div className='h-screen flex flex-col justify-center items-center gap-3'>
      <img src='/assets/img/loading-spinner.svg' alt='loading' width={100} />
      <h1 className='text-xl'>Loading...</h1>
    </div>
  );
}
export default Loading;
