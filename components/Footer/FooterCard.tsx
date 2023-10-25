const FooterCard: React.FC<{ img?: string; text?: string }> = ({
  img,
  text,
}) => {
  return (
    <div
      className="
          flex-col
          max-w-[200px]
          flex
          items-center
          "
    >
      <img src={`${img}`} alt="logo card" />
      <p className="text-center">{text}</p>
    </div>
  );
};
export default FooterCard;
