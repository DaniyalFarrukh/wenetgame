const footerLinks = {
  Game: ["About", "Gameplay", "Episodes", "Characters"],
  Economy: ["Tokenomics", "NFT Marketplace", "Staking"],
  Social: ["Discord", "Twitter / X", "Telegram", "YouTube", "Instagram"],
};

const Footer = () => (
  <footer className="py-20 border-t border-white/[0.05] bg-background">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
      <div className="md:col-span-1">
        <span className="text-3xl font-heading font-bold tracking-tighter text-foreground block mb-6">
          WENET<span className="text-primary">.</span>
        </span>
        <p className="text-muted-foreground text-sm max-w-sm mb-8">
          The ultimate Web3 VR English learning experience. Developed by ArgonTeq.
          Join the revolution in education.
        </p>
      </div>
      {Object.entries(footerLinks).map(([category, links]) => (
        <div key={category}>
          <h4 className="font-bold uppercase tracking-widest text-foreground text-sm mb-6">
            {category}
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {links.map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-primary transition-colors duration-300">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/[0.05] text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-4">
      <span>© 2025 ARGONTEQ. ALL RIGHTS RESERVED.</span>
      <div className="flex gap-6">
        <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
        <a href="#" className="hover:text-primary transition-colors">TERMS OF SERVICE</a>
      </div>
    </div>
  </footer>
);

export default Footer;
