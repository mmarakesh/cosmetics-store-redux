import { useTranslation } from "react-i18next";

const ToggleLang = () => {
    const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
    return(
<div>
<div className="btn-container">
        <button className="btn-lang" onClick={toggleLang}>
        {i18n.language === 'en' ? 'ru' : 'en'}
        </button>
</div>
</div>
    )

}
export default ToggleLang;