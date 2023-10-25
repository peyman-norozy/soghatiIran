const CompanyDetails: React.FC = () => {
  return (
    <address
      className="
          flex-col
          not-italic
          "
    >
      <i
        className="
        soghati-fill-location 
        ml-[8px] 
        m-t-[16px]
        "
      />
      <b>آدرس دفتر مرکزی:</b>
      <p>تهران،یوسف آباد، خیابان فتحی شقاقی، پلاک 50، واحد 2</p>
      <i
        className="
        soghati-call-o 
        ml-[8px] 
        m-t-[16px]
        "
      />
      <b>شماره های تماس:</b>
      <div
        className="
        flex 
        justify-between 
        max-w-[300px]
        "
      >
        <p>09121248883</p>
        <p className="">021-8855 21 90</p>
      </div>
      <i
        className="
        soghati-document-lustify-center-1-o 
        ml-[8px] 
        m-t-[16px]
        "
      />
      <b>پست الکترونیک:</b>
      <p>info[at]kelideamlak[dot]com</p>
    </address>
  );
};
export default CompanyDetails;
