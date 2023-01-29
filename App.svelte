<script>
  import getFoo from './foo.js';
</script>

<p>This gets replaced: __FOO__</p>
<p>This does not get replaced: {getFoo()}</p>