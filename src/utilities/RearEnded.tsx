export function RearEndedInterest(invoiceModel: any) {
    let { data } = invoiceModel[0];
    data.map((res: any) => {
      let principleAmount = RearEndedTrancheAmount(res);
      let date1 = new Date(res?.invoiceDueDate);
      let date2 = new Date(res?.invoiceDate);
  
      // To calculate the time difference of two dates
      let Difference_In_Time = date2.getTime() - date1.getTime();
      let SI = RearEndedSimpleInterest(principleAmount, 10, Difference_In_Time);
    //   let tranchAvailed = disbursalAmount(principleAmount, SI)//tranche availed
    });
  }


  //interestRatePerAnnum
  export function RearEndedSimpleInterest(pAmount:any, interestRatePerAnnum = 3, days:any) {
    return ((pAmount * interestRatePerAnnum * days) / (100 * 365)).toFixed(3);
  }
  //export function trancheAvaild() {}
  export function RearEndedDisbursalAmount(
    res: any,
    margin: any,
    interestRatePerAnnum: any
  ) {
    let pAmount = RearEndedTrancheAmount(res, margin);
    let date1 = new Date(res?.invoiceDueDate);
    let date2 = new Date(res?.invoiceDate);
  
    // To calculate the time difference of two dates
    let Difference_In_Time = date2.getTime() - date1.getTime();
    
    for(let i=0; i<Difference_In_Time; i++){
        
    }


    let si = RearEndedSimpleInterest(pAmount, interestRatePerAnnum, Difference_In_Time);
    return (Number(pAmount) - Number(si)).toFixed(3);
  }
  
  export function RearEndedTrancheAmount(res: any, margin = 12) {
    return (
      Number(res?.invoiceAmount) - (Number(margin) * Number(res?.invoiceAmount)) / 100
    ).toFixed(3);
  }
  

