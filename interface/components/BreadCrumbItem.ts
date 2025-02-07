export interface IBreadCrumbItem {
  displayText: string;
  url: string;
  isBlank: boolean;
  children: IBreadCrumbItem[];
}
