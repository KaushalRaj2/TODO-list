function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-violet-800 text-white text-center p-4 mt-10">
            <p className="text-sm">&copy; {currentYear} iTask. All rights reserved.</p>
            <p className="text-xs mt-1">Made with ❤️ by Rajeev Kaushal | For educational and portfolio use only.</p>
            <p className="text-xs">Contact: rajeevkumarkaushal8563@gmail.com</p>
        </footer>
    )
}

export default Footer;
