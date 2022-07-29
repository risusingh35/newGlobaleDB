const listItems = function(items) {
    items.forEach(function(item,index) {
      console.log(`${index+1}. ${item}`)
    })
  }
    const items = ["Milk", "Coffee",'Tea']
    
    setTimeout(() => {
       listItems(items)
    }, 1000);

    