import Joi from 'joi';

const reviewValidationSchema = Joi.object({
    name: Joi.string()
        .trim()
        .min(1)
        .max(20)
        .required()
        .messages({
        'string.empty': 'Name is required',
        'string.min': 'Name must be at least 1 character long',
        'string.max': 'Name must be at most 20 characters long',
        }),
    rating: Joi.number()
        .min(1)
        .max(5)
        .required()
        .messages({
        'number.base': 'Rating must be a number',
        'number.min': 'Rating must be at least 1',
        'number.max': 'Rating must be at most 5',
        }),
    comment: Joi.string()
        .trim()
        .min(4)
        .max(250)
        .required()
        .messages({
        'string.empty': 'Comment is required',
        'string.min': 'Comment must be at least 4 characters long',
        'string.max': 'Comment must can be maximum 250 characters long',
        }),
    reviewDate: Joi.date()
        .required()
        .messages({
        // 'date.base': 'Review date must be a valid date',
        'date.base': 'An error occurred processing the review date',
        }),
   /* ownerResponse: Joi.string()
        .trim()
        .min(4)
        .max(250)
        .allow(null, "")
        .optional()
        .messages({
        'string.empty': 'Owner response must have value',
        'string.min': 'Owner response must be at least 4 characters long',
        'string.max': 'Owner response can be maximum 250 characters long',
        }),
    ownerResponseDate: Joi.date()
        .allow(null)
        .optional()
        .messages({
        'date.base': 'Owner response date must be a valid date',
        }), */
         // Unnecessary validation when review created by user.
    });

export default reviewValidationSchema;