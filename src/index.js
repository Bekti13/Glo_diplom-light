import modal from "./modules/modal";
import accordeon from './modules/accordeon';
import slider from './modules/slider';
import carusel from './modules/carusel';
import header from './modules/header';
import validation from './modules/validation';
import sendForm from './modules/sendForm';

modal()
accordeon()
slider()
carusel()
header()
validation()
sendForm({ formId: '[name=form-callback]' });