import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-white border-b border-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    {/* Left Section - Copyright and Privacy */}
                    <div className="text-black text-xs font-normal text-center">
                        <span>© {currentYear} UpahWork | All Rights Reserved</span>
                    </div>

                    {/* Right Section - Social Media Icons */}
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Instagram */}
                        <Link
                            href="instagram.com/upahwork"
                            aria-label="Instagram"
                            className="rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:ring-offset-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M19.0968 7.63896C18.4493 6.9824 17.5242 6.77397 16.6301 6.73228C15.7667 6.6906 15.5097 6.68018 13.3205 6.68018C11.1313 6.68018 10.8743 6.68018 10.011 6.73228C9.11676 6.77397 8.20202 6.97198 7.54422 7.63896C6.8967 8.29552 6.69114 9.24388 6.65002 10.1401C6.60891 11.0156 6.59863 11.2761 6.59863 13.4959C6.59863 15.7157 6.59863 15.9762 6.65002 16.8516C6.69114 17.7583 6.88642 18.6858 7.54422 19.3528C8.18146 19.999 9.12704 20.2178 10.011 20.2595C10.8743 20.3012 11.1313 20.3116 13.3205 20.3116C15.5097 20.3116 15.7667 20.3116 16.6301 20.2595C17.5242 20.2178 18.439 20.0198 19.0968 19.3528C19.7443 18.6963 19.9499 17.7583 19.991 16.8516C20.0321 15.9762 20.0424 15.7157 20.0424 13.4959C20.0424 11.2761 20.0424 11.0156 19.991 10.1401C19.9499 9.23346 19.7546 8.30594 19.0968 7.63896ZM13.3205 17.7687C10.9977 17.7687 9.11677 15.8616 9.11677 13.4959C9.11677 11.1302 10.9977 9.22304 13.3205 9.22304C15.6434 9.22304 17.5345 11.1302 17.5345 13.4959C17.5345 15.8616 15.6536 17.7687 13.3205 17.7687ZM17.699 10.0568C17.1542 10.0568 16.7123 9.60864 16.7123 9.0563C16.7123 8.50395 17.1542 8.05582 17.699 8.05582C18.2437 8.05582 18.6857 8.50395 18.6857 9.0563C18.6857 9.60864 18.2437 10.0568 17.699 10.0568Z" fill="#232323" />
                                <path d="M13.3101 0C5.96129 0 0 6.04452 0 13.4959C0 20.9474 5.96129 26.9919 13.3101 26.9919C20.659 26.9919 26.6203 20.9474 26.6203 13.4959C26.6203 6.04452 20.6692 0 13.3101 0ZM21.4607 16.9246C21.399 18.2065 21.0495 19.4779 20.1348 20.4159C19.22 21.3434 17.9558 21.6977 16.6916 21.7603C15.818 21.8019 15.5405 21.8124 13.3101 21.8124C11.0798 21.8124 10.8023 21.8124 9.92864 21.7603C8.66443 21.6977 7.4105 21.3434 6.48548 20.4159C5.57073 19.4884 5.22127 18.2065 5.1596 16.9246C5.11849 16.0388 5.10821 15.7574 5.10821 13.4959C5.10821 11.2345 5.10821 10.9531 5.1596 10.0672C5.22127 8.78539 5.57073 7.51396 6.48548 6.57602C7.40023 5.6485 8.66443 5.29416 9.92864 5.23163C10.8023 5.18995 11.0798 5.17953 13.3101 5.17953C15.5405 5.17953 15.818 5.17953 16.6916 5.23163C17.9558 5.29416 19.22 5.6485 20.1348 6.57602C21.0495 7.50354 21.399 8.78539 21.4607 10.0672C21.5018 10.9531 21.512 11.2345 21.512 13.4959C21.512 15.7574 21.512 16.0388 21.4607 16.9246Z" fill="#232323" />
                                <path d="M13.3101 10.7341C11.7993 10.7341 10.5762 11.9743 10.5762 13.5063C10.5762 15.0382 11.7993 16.2784 13.3101 16.2784C14.821 16.2784 16.0441 15.0382 16.0441 13.5063C16.0441 11.9743 14.821 10.7341 13.3101 10.7341Z" fill="#232323" />
                            </svg>
                        </Link>

                        {/* Facebook */}
                        <Link
                            href="https://www.facebook.com/profile.php?id=61582298315896&mibextid=wwXIfr&mibextid=wwXIfr"
                            aria-label="Facebook"
                            className=" rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:ring-offset-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M25.9896 13.0769C25.9896 19.606 21.19 25.0123 14.9329 26V16.8821H17.973L18.556 13.1081H14.8808C14.8808 9.76035 14.4019 8.336 18.6601 8.62711V5.42492C12.6008 4.32287 10.2062 6.57896 10.8517 13.1081H7.53052V16.8821H10.8517V26C-3.81768 23.9311 -3.59905 1.60933 11.4139 0.0810161C19.316 -0.78191 26 5.36254 26 13.0769H25.9896Z" fill="#232323" />
                            </svg>
                        </Link>

                        {/* X (Twitter) */}
                        <Link
                            href="x.com/upahwork"
                            aria-label="X"
                            className="rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:ring-offset-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
                                <path d="M13.3101 0C5.9613 0 0 6.04452 0 13.4959C0 20.9474 5.9613 26.9919 13.3101 26.9919C20.659 26.9919 26.6203 20.9474 26.6203 13.4959C26.6203 6.04452 20.6692 0 13.3101 0ZM16.0749 20.1241L12.5804 15.4969L8.5822 20.1241H6.36214L11.5423 14.1212L6.07436 6.87824H10.6481L13.8035 11.1094L17.4522 6.87824H19.6723L14.8313 12.4955L20.5254 20.1345H16.0647L16.0749 20.1241Z" fill="#232323" />
                                <path d="M8.83936 8.07666L16.5685 18.3211H17.7505L10.1138 8.07666H8.83936Z" fill="#232323" />
                            </svg>
                        </Link>

                        {/* TikTok */}
                        <Link
                            href="https://www.tiktok.com/@upahwork?_t=ZS-90s1kmNAwCO&_r=1"
                            aria-label="TikTok"
                            className="rounded-full flex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:ring-offset-2"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="27" viewBox="0 0 26 27" fill="none">
                                <path d="M13 0C5.82239 0 0 6.04633 0 13.5C0 20.9537 5.82239 27 13 27C20.1776 27 26 20.9537 26 13.5C26 6.04633 20.1876 0 13 0ZM19.2942 12.1656C18.0093 12.1656 16.8147 11.7382 15.8409 11.0085V16.2521C15.9514 20.005 11.5042 22.3714 8.6332 20.1405C4.74826 17.4405 7.18764 10.7896 11.8757 11.5402V14.1985C9.45637 13.4375 8.08108 16.9923 10.2896 18.2015C11.5946 18.9625 13.3313 17.9201 13.3513 16.3564V5.99421H15.8409C15.8209 7.94363 17.417 9.60116 19.2942 9.58031V12.1552V12.1656Z" fill="#232323" />
                            </svg>
                        </Link>

                        {/* <Link
                            href="#"
                            aria-label="LinkedIn"
                            className=" rounded-fullflex items-center justify-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#FDCA0C] focus:ring-offset-2 flex rounded-full"
                        >
                            <Image src="/linkdin.svg" alt="LinkedIn" width={27} height={27} />
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}

