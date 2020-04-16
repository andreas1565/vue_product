<template>
  <main role="main" class="col-md-8 ml-sm-auto col-lg-8 px-4 container">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom"
    >
      <h1 class="h2">kontakt information</h1>
    </div>

    <table class="table table-striped table-sm table-hover">
      <thead>
        <tr>
          <th style="width:70px"></th>
          <th>Navn</th>
          <th>Address</th>
          <th>Mobile</th>
          <th>Fax</th>
          <th>Email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="contactinformation in allContactinformations"
          :key="`${contactinformation}-${Math.random()}`"
        >
          <td>
            <router-link
              :to="{ name:  'DashboardEditContactInformationPage', params: { id: contactinformation.id, } }"
              class="update updatebtn fas fa-edit"
            ></router-link>
          </td>
          <td>{{ contactinformation.name }}</td>
          <td>{{contactinformation.address}}</td>
          <td>{{contactinformation.phone}}</td>
          <td>{{contactinformation.fax}}</td>
          <td>{{contactinformation.email}}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
export default {
  props: ["allContactinformations"],
  name: "DashboardContactInformation"
};
</script>