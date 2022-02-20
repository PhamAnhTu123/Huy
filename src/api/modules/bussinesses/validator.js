import Joi from 'joi';
import Validator from '../../core/Validator';
import { BUSSINESS_STATUS } from '../../../constants/type';

export default class BussinessValidator extends Validator {
  createOne = Joi.object({
    shopName: Joi.string().required(),
    shopDescription: Joi.string().required(),
    address: Joi.string().required(),
    logo: Joi.string(),
    idShop: Joi.string(),
    passShop: Joi.string(),
    phone: Joi.string().required(),
    owner: Joi.string().required(),
  });

  editOne = Joi.object({
    shopName: Joi.string(),
    shopDescription: Joi.string(),
    address: Joi.string(),
    logo: Joi.string(),
    idShop: Joi.string(),
    passShop: Joi.string(),
    phone: Joi.string(),
  });

  paramsSubmit = Joi.object({
    id: Joi.string().required(),
    submition: Joi.string().valid(BUSSINESS_STATUS.ACCEPTED, BUSSINESS_STATUS.DECLINED),
  });

  queryBussiness = Joi.object({
    limit: Joi.number().integer().min(1).max(100).default(10),
    offset: Joi.number().integer().default(0),
    orderBy: Joi.string().default('-id'),
    fields: Joi.array(),
    page: Joi.number().integer().default(0),
    filter: Joi.string(),
    search: Joi.string().trim(),
    q: Joi.string().trim(),
    category: Joi.string().trim(),
    sort: Joi.string(),
  });
}
