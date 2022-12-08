# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and creates the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

// swal messages
import Swal from "sweetalert2";

if (response.code == 0) {
new Swal({
position: "center",
icon: "error",
text: response.msg,
showConfirmButton: true,
});
} else {
new Swal({
position: "center",
icon: "success",
text: response.msg,
showConfirmButton: true,
});

}

// swal 2

import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";

if (res.code == 0) {
new Swal({
position: "top-end",
icon: "error",
text: res.msg,
showConfirmButton: false,
timer: 1500
});
} else {
new Swal({
position: "top-end",
icon: "success",
text: res.msg,
showConfirmButton: false,
timer: 1500
});
}
