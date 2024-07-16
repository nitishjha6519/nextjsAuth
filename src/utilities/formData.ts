export function getFormData(object: any) {
  const formData = new FormData();
  Object.keys(object).forEach((key) => {
    if (
      key === "invoiceDocument" ||
      key === "purchaseOrderDocument" ||
      key === "grnDocument" ||
      key === "srnDocument" ||
      key === "ewayBillDocument" ||
      key === "noaDocument"
    ) {
      for (let file of object[key]) {
        formData.append(`${key}`, file);
      }
    } else {
      if (object[key] != "") {
        formData.append(key, object[key]);
      }
    }
  });
  return formData;
}
