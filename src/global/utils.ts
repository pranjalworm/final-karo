export namespace Utils {

  export const getIdParam = () => {

    const params = (new URL(document.location as any)).searchParams;
    return params.get('id');
  }

}