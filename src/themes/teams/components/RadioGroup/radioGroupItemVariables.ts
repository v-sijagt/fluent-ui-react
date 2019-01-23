import { RadioGroupItemProps } from '../../../../components/RadioGroup/RadioGroupItem'

// TODO remove sloppy types
export default (siteVars: any, props: RadioGroupItemProps, pxToRem: any) => {
  const { checked } = props

  return {
    fontWeight: 400,
    radioMargin: `${pxToRem(10)}`,
    disabledColor: siteVars.gray06,

    // variables for the icon part
    icon: {
      margin: `0 ${pxToRem(10)} 0 0`,
      color: checked ? siteVars.white : siteVars.brand,
      backgroundColor: checked ? siteVars.brand : siteVars.white,
      borderColor: checked ? siteVars.white : siteVars.brand,
      outlineColor: siteVars.brand,
    },
  }
}
