import Joi from 'joi';
import Validator from '../../core/Validator';

export default class ServiceValidator extends Validator {
  createOne = Joi.object({
    shop: Joi.string().required(),
    user: Joi.string().required(),
    service: Joi.string().required(),
  });
}
