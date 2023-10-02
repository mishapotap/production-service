import { classNames } from "shared/lib/classNames"
import styles from "./LangSwitcher.module.scss"
import { useTranslation } from "react-i18next"
import { Button } from "shared/ui/Button/Button"

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()
	const onToggle = () =>
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")

	return (
		<Button
			type={"button"}	onClick={onToggle} className={classNames(styles.langSwitcher, {}, [className])}
		>
			{t("Язык")}
		</Button>
	)
}
