var promise = new Promise(function (success, failure) {
    // بعض العمليات التي قد تستغرق وقتًا، مثل طلب API أو عملية حسابية كبيرة
    let condition = true; // مجرد شرط للتحقق

    if (condition) {
        success("تم تنفيذ العملية بنجاح!"); // استدعاء الدالة success (resolve) عند النجاح
    } else {
        failure("حدث خطأ أثناء تنفيذ العملية."); // استدعاء الدالة failure (reject) عند الفشل
    }
});

promise.then(function (result) {
    // هنا يتم التعامل مع النجاح
    console.log(result); // طباعة رسالة النجاح
}).catch(function (error) {
    // هنا يتم التعامل مع الخطأ
    console.log(error); // طباعة رسالة الخطأ
});



// Ajax request using promises


function makeAjaxRequest(url) {
    return new Promise((resolve, reject) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                return response.json(); // Convert the response to JSON
            })
            .then(data => {
                resolve(data); // Resolve the promise with the data
            })
            .catch(error => {
                reject(error); // Reject the promise with the error
            });
    });
}

// Using the function to make an Ajax request
makeAjaxRequest('https://jsonplaceholder.typicode.com/posts')
    .then(data => {
        console.log('Success:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
