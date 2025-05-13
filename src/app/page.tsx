
const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[url('/png/playerBanner.png')] bg-cover w-full max-w-[1440px] min-h-[606px]">
      <p className="max-w-[645px] font-bold text-[40px] text-[var(--colorWhite)] text-center">DON'T JUST WATCH Football
 PLAY IT!</p>
 <p className="max-w-[645px] text-[var(--colorWhite)] text-center">Create your Football Fantasy team to earn points based 
  on player performance and stand a chance to win prizes</p>
  <button>Create Team</button>
    </div>
  )
}

export default Home
