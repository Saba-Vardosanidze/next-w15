
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/png/playerBanner.png')] bg-cover m-auto w-full max-w-[1440px] min-h-[606px]">
      <p className="max-w-[645px] font-bold text-[40px] text-[var(--colorWhite)] text-center">DON'T JUST WATCH Football
 PLAY IT!</p>
 <p className="max-w-[645px] text-[var(--colorWhite)] text-center">Create your Football Fantasy team to earn points based 
  on player performance and stand a chance to win prizes</p>
<div className="inline-block relative mt-[24px]">
  <div className="z-0 absolute inset-0 border-1 border-white -translate-x-1.5 translate-y-1.5"></div>
  <button className="z-10 relative bg-red-600 px-[20px] py-[12px] font-semibold text-white text-lg cursor-pointer">
    Create Team
  </button>
</div>
    </div>
  )
}

export default Home
