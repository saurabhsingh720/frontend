// import React from 'react'

import { FaUserPlus } from "react-icons/fa"
import { IoMdSend } from "react-icons/io"
import { MdFindInPage } from "react-icons/md"

const HowitWorks = () => {
  return (
    <div className="howitworks">
      <div className="container">
        <h3>How Jappy Works</h3>
        <div className="banner">

          <div className="card">
            <FaUserPlus/>
            <p>Create Account</p>
            <p>Before applying for a job or before posting for a job please create your account.</p>
          </div>

          <div className="card">
            <MdFindInPage/>
            <p>Find a job or post a job</p>
            <p>You can find the jobs and also can post a job.</p>
          </div>

          <div className="card">
            <IoMdSend/>
            <p>See All the jobs</p>
            <p>All the applied applications and posted jobs are visible to the respective person.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default HowitWorks;
