import React from "react";

function addroom() {
  return (
    <>
      <div>addroom</div>
      <label for="name">Nama ruangan</label>
      <input type="text" id="name" name="name" required />

      <label for="capacity"> capacity</label>
      <input type="text" id="capacity" name="capacity" required />

      <label for="gambar"> url gambar</label>
      <input type="text" id="gambar" name="capacity" required />

      <label for="deskripsi"> deskripsi</label>
      <input type="text" id="deskripsi" name="deskripsi" required />

      <select name="atype" id="type" required>
        <option value="classroom">classroom</option>
        <option value="Laboratorium">Laboratorium</option>
        <option value="computer lab">computer lab</option>
        <option value="auditorium">auditorium</option>
        <option value="art studio">art studio</option>
      </select>
    </>
  );
}

export default addroom;
