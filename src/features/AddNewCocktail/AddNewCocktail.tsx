import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./AddNewCocktail.module.css";
import { useState } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import { CombinedCocktailType, newCockTailInputs } from "../../types";

export const AddNewCocktail = () => {
  const [isDisabled, setDisabled] = useState(false);
  const { storeCocktail } = useLocalStorage();
  const [base64, setBase64] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CombinedCocktailType>();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setBase64(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSuccess = () => {
    setDisabled(false);
  };
  const onError = () => {
    setDisabled(false);
  };

  const onSubmit: SubmitHandler<newCockTailInputs> = (data) => {
    setDisabled(true);
    const newCocktail = {
      ...data,
      strDrinkThumb: base64,
      idDrink: crypto.randomUUID(),
    };
    storeCocktail({
      cocktail: newCocktail,
      successFn: onSuccess,
      failedFn: onError,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={`${styles.form_block} shadow`}>
        <h2>Add New Cocktail</h2>
        <label>Drink Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        <label>*Drink Title</label>
        <input {...register("strDrink", { required: true })} />
        {errors.strDrink && (
          <span className={styles.error}>Missing field is required</span>
        )}
        <label>*Drink Category</label>
        <input {...register("strCategory", { required: true })} />
        {errors.strCategory && (
          <span className={styles.error}>Missing field is required</span>
        )}
        <label>*Drink Instructions</label>
        <input {...register("strInstructions", { required: true })} />
        {errors.strInstructions && (
          <span className={styles.error}>Missing field is required</span>
        )}
        <label>*Drink Ingredients</label>
        <input {...register("strIngredient1", { required: true })} />
        {errors.strIngredient1 && (
          <span className={styles.error}>Missing field is required</span>
        )}

        <input className={styles.submit} disabled={isDisabled} type="submit" />
      </div>
    </form>
  );
};
