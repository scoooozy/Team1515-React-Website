import React from 'react'
import NavPage from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import OutreachCard from '../OutreachCard/OutreachCard'
import haha from "./albionVideo_-_frame_at_0m9s.jpg"
import haha2 from "./gatea.jpg"
const OutreachPage = () => {
  const events = [{
    title: "Albion Street",
    text: "Members of the MorTorq robotics team visited the Albion Street Elementary School in Los Angeles, California, over the holiday season. Members of the team showcased the robot while others handed out presents and played with the children. This annual event is arguably the most anticipated event of the holiday season for MorTorq. The students at the Albion Street school were as excited for the event as MorTorq members.",
    images:[haha,haha2],
  }]
  return (
    <div>
      <NavPage />
      {events.map((e) => (
        <OutreachCard {...e} />
       ))}
      <Footer/>
    </div>
  )
}

export default OutreachPage