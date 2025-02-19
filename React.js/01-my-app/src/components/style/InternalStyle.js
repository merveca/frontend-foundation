const InternalStyle = () => {
  const styleParagraph = {
    color: "orange",
    fontSize: "2rem",
  };

  const styleSalih = {
    backgroundColor: "blue",
  };

  return (
    <div style={styleParagraph}>
      hocam şöyle somut projelerde görmek istiyor insan
      <span style={styleSalih}>(Salih Bayram)</span>
      <div style={styleParagraph}>YEni yazı</div>
    </div>
  );
};

export default InternalStyle;
