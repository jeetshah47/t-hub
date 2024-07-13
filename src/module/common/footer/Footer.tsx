const Footer = () => {
  const footerItems = [
    {
      title: "Company Info",
      items: ["About Us", "Carrier", "We are Hiring", "Blog"],
    },
    {
      title: "Legal",
      items: ["About Us", "Carrier", "We are Hiring", "Blog"],
    },
    {
      title: "Features",
      items: [
        "Bussiness Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      title: "Resources",
      items: ["IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];

  return (
    <div className="w-full flex justify-center items-center py-6  border-t">
      <div className="w-3/4 ">
        <div className="py-10">
          <p className="font-bold text-2xl">T-Hub</p>
        </div>
        <div className="flex justify-between">
          {footerItems.map((footer) => (
            <div key={footer.title}>
              <div className="font-bold py-2">
                <p className="text-primary">{footer.title}</p>
              </div>
              {footer.items.map((item, index) => (
                <p className="py-2.5 text-sm text-secondary font-semibold" key={index}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
