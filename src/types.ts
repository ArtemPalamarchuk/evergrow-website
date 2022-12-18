export interface ITextImage {
  heading: string,
  text: string,
  buttonText: string,
  img: string,
}

export interface IListItem {
  img: string
  title: string
  text: string
}
export type IList = IListItem[]

export interface IForm {
  heading: string
  text: string
  buttonText: string
}


export interface ISolutionPageLayout {
  textImage: ITextImage,
  list: IList,
  form: IForm,
}

export interface IContactUsPageContent {
  form: IForm,
}