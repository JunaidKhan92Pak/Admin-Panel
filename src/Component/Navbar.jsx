import { Link, Outlet } from "react-router-dom"

const Navbar = () =>{
    return (
        <div className="bg-[#f1f1f1] flex">
  <div className="h-screen  justify-between items-center flex flex-col bg-white min-h-screen p-4 w-[15%] sticky top-0">
    <div>
      <h1 className="font-bold text-blue-800 text-xl">Hamdan</h1>
    </div>
    <div>
      <ul className="flex flex-col text-black">
        <li className=" gap-2 p-1 mt-4 flex hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg">
          <svg className="w-6 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" />
          </svg> <Link to="/" className=" h-12 w-[130px] py-2 focus:outline-none">Dashboard</Link>
        </li>
        <li className=" gap-2 p-1 mt-4 flex hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg">
          <svg className="w-6 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 48 48">
            <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={3} d="M35.4,38.8c-3.2,2.4-7.1,3.9-11.4,3.9C13.7,42.7,5.3,34.3,5.3,24c0-2.6,0.6-5.2,1.5-7.4" /><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={3} d="M12.1,9.6C15.3,7,19.5,5.3,24,5.3c10.3,0,18.7,8.4,18.7,18.7c0,2.3-0.4,4.5-1.2,6.6" /><line x1={24} x2={24} y1={14} y2={34} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={3} /><line x1={34} x2={14} y1={24} y2={24} fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit={10} strokeWidth={3} />
          </svg>  <Link to="newpost"  className=" h-12 w-[130px] py-2.5 focus:outline-none">New post</Link>
        </li>
        <li className=" gap-2 p-1 mt-4 flex hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg">
          <svg className="w-6 h-12" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 100 100">
            <path d="M 50 14 C 30.149 14 14 30.149 14 50 C 14 69.851 30.149 86 50 86 C 69.851 86 86 69.851 86 50 C 86 30.149 69.851 14 50 14 z M 50 16 C 68.748 16 84 31.252 84 50 C 84 68.748 68.748 84 50 84 C 31.252 84 16 68.748 16 50 C 16 31.252 31.252 16 50 16 z M 50 19 C 32.907 19 19 32.907 19 50 C 19 67.093 32.907 81 50 81 C 67.093 81 81 67.093 81 50 C 81 41.279 77.294938 32.912875 70.835938 27.046875 C 70.632937 26.861875 70.315859 26.876078 70.130859 27.080078 C 69.944859 27.284078 69.960062 27.602109 70.164062 27.787109 C 76.415063 33.464109 80 41.561 80 50 C 80 66.542 66.542 80 50 80 C 33.458 80 20 66.542 20 50 C 20 33.458 33.458 20 50 20 C 53.549 20 57.024125 20.613219 60.328125 21.824219 C 60.587125 21.922219 60.87475 21.786344 60.96875 21.527344 C 61.06375 21.268344 60.930875 20.981719 60.671875 20.886719 C 57.256875 19.634719 53.667 19 50 19 z M 63.529297 22.142578 C 63.334813 22.131141 63.143031 22.233922 63.050781 22.419922 C 62.928781 22.668922 63.030344 22.969797 63.277344 23.091797 C 63.941344 23.419797 64.603141 23.77725 65.244141 24.15625 C 65.324141 24.20325 65.411047 24.226563 65.498047 24.226562 C 65.669047 24.226562 65.835687 24.138469 65.929688 23.980469 C 66.069688 23.742469 65.991906 23.435922 65.753906 23.294922 C 65.090906 22.902922 64.406703 22.533359 63.720703 22.193359 C 63.658703 22.162859 63.594125 22.146391 63.529297 22.142578 z M 67.412109 24.523438 C 67.285984 24.545812 67.169344 24.617469 67.089844 24.730469 C 66.931844 24.956469 66.985891 25.268734 67.212891 25.427734 C 67.545891 25.659734 67.873313 25.899484 68.195312 26.146484 C 68.286312 26.215484 68.392047 26.248047 68.498047 26.248047 C 68.648047 26.248047 68.798484 26.181734 68.896484 26.052734 C 69.064484 25.833734 69.021734 25.519562 68.802734 25.351562 C 68.469734 25.096563 68.129156 24.849422 67.785156 24.607422 C 67.672156 24.527922 67.538234 24.501063 67.412109 24.523438 z M 50 32 C 48.346 32 47 33.346 47 35 L 47 47 L 36 47 C 34.346 47 33 48.346 33 50 C 33 51.654 34.346 53 36 53 L 47 53 L 47 65 C 47 66.654 48.346 68 50 68 C 51.654 68 53 66.654 53 65 L 53 53 L 64 53 C 65.654 53 67 51.654 67 50 C 67 48.346 65.654 47 64 47 L 53 47 L 53 35 C 53 33.346 51.654 32 50 32 z M 50 33 C 51.103 33 52 33.897 52 35 L 52 47.5 C 52 47.776 52.224 48 52.5 48 L 64 48 C 65.103 48 66 48.897 66 50 C 66 51.103 65.103 52 64 52 L 52.5 52 C 52.224 52 52 52.224 52 52.5 L 52 65 C 52 66.103 51.103 67 50 67 C 48.897 67 48 66.103 48 65 L 48 52.5 C 48 52.224 47.776 52 47.5 52 L 36 52 C 34.897 52 34 51.103 34 50 C 34 48.897 34.897 48 36 48 L 47.5 48 C 47.776 48 48 47.776 48 47.5 L 48 35 C 48 33.897 48.897 33 50 33 z" />
          </svg> <Link to="allpost" className=" h-12 w-[130px] py-2.5 focus:outline-none">All Post</Link>
        </li>
        <li className=" gap-2 p-1 mt-4 flex hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg">
          <svg className="w-6 h-12 hover:" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" />
          </svg>   <Link to="#" className=" h-12 w-[130px] py-2.5 focus:outline-none">Category</Link>
        </li> 
        <li className=" gap-2 p-1 mt-4 flex hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-lg">
          <svg className="w-6 h-12 hover:" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={100} height={100} viewBox="0 0 24 24">
            <path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 11 21 L 11 15 L 13 15 L 13 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z M 12 4.7910156 L 18 10.191406 L 18 11 L 18 19 L 15 19 L 15 13 L 9 13 L 9 19 L 6 19 L 6 10.191406 L 12 4.7910156 z" />
          </svg>   <Link to="users" className=" h-12 w-[130px] py-2.5 focus:outline-none">Users</Link>
        </li>
      </ul>
    </div>
    <div>
      <img src="{require(&quot;./devzox.png&quot;)}" alt="Devzox.com" />
    </div>
    <Link to="register" className=" h-12 w-[130px] py-2.5 focus:outline-none">
    <button className="text-[#ff2c2c]"><i className="fa fa-sign-out " aria-hidden="true" />
      SignUp</button>
      </Link>
    <button className="text-[#ff2c2c]"><i className="fa fa-sign-out " aria-hidden="true" />
      LogOut</button>
  </div>
        <Outlet />
</div>
    )
}

export default Navbar