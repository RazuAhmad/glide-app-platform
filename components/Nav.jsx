import Image from 'next/image'
import Link from 'next/link'
import {CiSearch, GiHamburgerMenu} from 'react-icons/ci';

const Nav = () => {
  return (
 
    <nav className='app-navbar_container'>
      <Link href="/" className='flex-between'>
      <Image src="/assets/images/logo.svg" width="78" height="24" alt='logo'/>
      </Link>

    {/* app-navbar_container-middlepart */}

      <div className=' app-navbar_container-middlepart'>
        <div className='dropdown'>
        <button className="dropbtn">Solution 
      
      </button>
      <div className='dropdown-content'>
        <div className='dropdown-content_glide-for'>
          <p className='mb-7'>Glide For</p>
          <div className='dropdown-content_glide-for_links'>
          <Link href="/">Business</Link>
          <Link href="/">Operations</Link>
          <Link href="/">Agencies</Link>
          <Link href="/">Field Teams</Link>
          <Link href="/">Enterprise</Link>
          </div>
        </div>

        <div>
          <p className='mb-7'>By Use Case</p>

          <div className='dropdown-content_glide-for_links'>
          <Link href="/">Work Order Management</Link>
          <Link href="/">Inspection Tools</Link>
          <Link href="/">Inventory Management</Link>
          <Link href="/">Field Sales</Link>
          <Link href="/">Knowledge Management</Link>
          </div>
        </div>

        <div>
          <p>Customer</p>

          <div className='dropdown-content_glide-for_links'>
            <div className='flex justify-between'>
             
             
            </div>
        
          </div>
          
        </div>

      </div>
        </div>

        <div>
          Templates
          
        </div>

        {/* Product */}
        <div>
          
          <div className='dropdown'>
        <button className="dropbtn">Product 
      
      </button>
      <div className='dropdown-content'>
      <div >
          <p className='mb-7'>Discover Glide</p>

          <div className='flex justify-between'>

          <div className='flex-col '>
          <p><Link href="/">Apps</Link></p>
          <p><Link href="/">Integrations</Link></p>
          
          </div>

          <div className='flex-col'>
          <p><Link href="/">Data</Link></p>
          <p><Link href="/">Security</Link></p>
          </div>

          <div>
            <p>
            <Link href="/">Actions</Link>
            </p>

          </div>
          
          
          </div>
        </div>
      </div>
      </div>
        </div>
        <div>
          Resources
        </div>
        <div>
          Pricing
        </div>
      </div>

      {/* app-navbar_container-lastPart */}
      <div className='app-navbar_container-lastPart'>
        <div className='search-icon'>
          {/* <Image src="/assets/images/search.svg" width={4} height={4} style={{color:"white"}} /> */}
          <CiSearch width={4} />
        </div>
        <div className='login-btn'>
         <Link href="/login" >
         <button type='button' className='login-btn'>Login</button> 
         </Link>
        </div>

        <div>
        <Link href="/signUp">
         <button type='button' className='signUp-btn' >Sign Up</button> 
         </Link>
          
        </div>

        <div className='hamburger-menu'>
        <Image src="/assets/images/hamburgermenu.svg" width="20" height="12" alt='hamburgermenu'/>
        </div>
      </div>
    </nav>
 
  )
}

export default Nav