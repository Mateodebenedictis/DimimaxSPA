import { useTranslation } from "react-i18next";

// Make a class with all the texts you want to use as properties

export default class FuitDescription {

    constructor() {

        const { t } = useTranslation();

        this.text = {
            Apple: t("apple_description"),
            Cherries: t("cherries_description"),
            Grape: t("grape_description"),
            Grapefuit: t("grapefuit_description"),
            Kiwi: t("kiwi_description"),
            Lemon: t("lemon_description"),
            Melon: t("melon_description"),
            Orange: t("orange_description"),
            Peach: t("peach_description"),
            Pear: t("pear_description"),
            Plum: t("plum_description"),
            Tangerine: t("tangerine_description"),
        };
    }

    // Make a function that returns the text you want passsing the key as a parameter

    getText(key) {
        return this.text[key];
    }

}