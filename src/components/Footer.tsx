import './Footer.css';

export default function Footer() {
  return (
    <footer>
      <div>
        <div className="flex justify-center items-center">
          <p className="text-center footer-text">JOIN THE LEAP FORWARD</p>
        </div>
        <div className="flex justify-center items-center">
          <p className='teat-center footer-year'>© 2023</p>
        </div>
        <br /><br /><br />
        <span className='absolute'>AKKHAYAR SHELL</span>
        <div className="footer-div rounded-xl">
          <div className='rounded-xl first-footer grid grid-cols-12 pt-24'>
            <div className='col-span-6 flex justify-center item-center'>
              <div className='footer-info-div rounded-xl'>
                <p>Community</p>
              </div>
            </div>
            <div className='col-span-6 flex justify-center item-center'>
              <div className='footer-info-div rounded-xl'>
                <p>More</p>
              </div>
            </div>
          </div>
          <div className='grid grid-rows-2 pt-10'>
            <div className=''>
              <p className='text-center footer-cmd'>PRESS TO OPEN COMMAND LINE</p>
            </div>
            <div className='flex justify-center item-center pt-5'>
              <img src="footer_visual.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </footer>
  )
}