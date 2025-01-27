import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./NewCocktail.module.css";

type Inputs = {
  DrinkThumb: string;
  Drink: string;
  Category: string;
  Instructions: string;
  Ingredient1: string;
};

export const NewCocktail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.wrapper_inner} shadow`}>
        <h2>Add New Cocktail</h2>
        <label>Drink Image</label>
        <input {...register("DrinkThumb")} />
        <label>*Drink Title</label>
        <input {...register("Drink", { required: true })} />
        {errors.Drink && (
          <span className={styles.error}>Missing field is required</span>
        )}
        <label>*Drink Category</label>
        <input {...register("Category", { required: true })} />
        {errors.Category && (
          <span className={styles.error}>Missing field is required</span>
        )}
        <label>*Drink Instructions</label>
        <input {...register("Instructions", { required: true })} />
        {errors.Instructions && (
          <span className={styles.error}>Missing field is required</span>
        )}
        <label>*Drink Ingredients</label>
        <input {...register("Ingredient1", { required: true })} />
        {errors.Ingredient1 && (
          <span className={styles.error}>Missing field is required</span>
        )}

        <input className={styles.submit} type="submit" />
      </div>
    </form>
  );
};
